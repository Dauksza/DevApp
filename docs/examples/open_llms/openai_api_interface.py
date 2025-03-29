import os

from mistral_ai import MistralAI

client = MistralAI(api_key=os.getenv("MISTRAL_API_KEY"))

response = client.generate(
    model="mistral-large-latest",
    prompt="Provide me with only the code for a simple python function that sums two numbers.",
    temperature=0.7,
    max_tokens=200,
)

print(response['choices'][0]['text'])
