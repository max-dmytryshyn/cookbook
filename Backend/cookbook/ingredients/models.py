from django.db import models


class CategoryModel(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class IngredientModel(models.Model):
    name = models.CharField(max_length=100)
    notes = models.TextField(null=True)
    category = models.ForeignKey(
        CategoryModel, related_name="ingredients", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
