import graphene
from django.shortcuts import get_object_or_404
from graphene_django import DjangoObjectType
from ingredients.models import CategoryModel, IngredientModel


class CategoryType(DjangoObjectType):
    class Meta:
        model = CategoryModel
        fields = ("id", "name", "description", "ingredients")


class IngredientType(DjangoObjectType):
    class Meta:
        model = IngredientModel
        fields = ("id", "name", "notes", "category")


class Query(graphene.ObjectType):
    all_ingredients = graphene.List(IngredientType)
    all_categories = graphene.List(CategoryType)
    category_by_name = graphene.Field(CategoryType, name=graphene.String(required=True))

    def resolve_all_ingredients(root, info):
        # We can easily optimize query count in the resolve method
        return IngredientModel.objects.select_related("category").all()

    def resolve_category_by_name(root, info, name):
        try:
            return CategoryModel.objects.get(name=name)
        except CategoryModel.DoesNotExist:
            return None

    def resolve_all_categories(root, info):
        return CategoryModel.objects.all()


class CreateCategory(graphene.Mutation):
    id = graphene.ID()
    name = graphene.String()

    class Arguments:
        name = graphene.String()

    def mutate(self, info, name):
        category = CategoryModel(name=name)
        category.save()

        return CreateCategory(id=category.id)


class CreateIngredient(graphene.Mutation):
    id = graphene.ID()
    name = graphene.String()
    notes = graphene.String()
    category = graphene.Field(CategoryType)

    class Arguments:
        name = graphene.String()
        notes = graphene.String(required=False)
        category_id = graphene.ID()

    def mutate(self, info, name, category_id, notes=None):
        category = get_object_or_404(CategoryModel, pk=category_id)
        ingredient = IngredientModel(name=name, category=category, notes=notes)
        ingredient.save()

        return CreateIngredient(
            id=ingredient.id,
            name=ingredient.name,
            notes=ingredient.notes,
            category=ingredient.category)


class Mutation(graphene.ObjectType):
    create_category = CreateCategory.Field()
    create_ingredient = CreateIngredient.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
