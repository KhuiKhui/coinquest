'use server';
import OpenAI from 'openai';

export default async function getResponse(msg: string) {
  const openai = new OpenAI();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'user',
        content: msg,
      },
    ],
    // response_format: {
    //   // See /docs/guides/structured-outputs
    //   type: 'json_schema',
    //   json_schema: {
    //     name: 'answer',
    //     schema: {
    //       type: 'object',
    //       properties: {
    //         result: {
    //           description: 'The answer of the question',
    //           type: 'string',
    //         },
    //       },
    //       additionalProperties: false,
    //     },
    //   },
    // },
  });
  return completion.choices[0].message.content;
}
