import os

from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain_openai import ChatOpenAI

model = ChatOpenAI(
    model="mistral-large-latest",
    temperature=0.1,
    callbacks=[StreamingStdOutCallbackHandler()],
    streaming=True,
)

prompt = (
    "Provide me with only the code for a simple python function that sums two numbers."
)

model.invoke(prompt)
