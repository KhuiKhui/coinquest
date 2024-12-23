'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    {
      role: 'user',
      content: "What's 2+2",
    },
  ],
  response_format: {
    // See /docs/guides/structured-outputs
    type: 'json_schema',
    json_schema: {
      name: 'email_schema',
      schema: {
        type: 'object',
        properties: {
          result: {
            description: 'The answer of the question',
            type: 'string',
          },
        },
        additionalProperties: false,
      },
    },
  },
});
export default async function Test() {
  return completion.choices[0].message.content;
}
