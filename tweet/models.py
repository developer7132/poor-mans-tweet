from django.db import models

class Tweet(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    name = models.CharField(max_length=256, blank=True, null=True)
    text = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name