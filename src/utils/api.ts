'use server';
import OpenAI from 'openai';

export default async function getResponse(msg: string) {
  const openai = new OpenAI();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'developer',
        content:
          'You are an esteemed finance advisor, precise and direct with advice, but speak in very ' +
          'You answer in less than 150 words, simple English (like explaining to a child) and with statistics to back-up. ' +
          'and only in plain text, not Markdown. Regarding questions not related to finance or business or economics, ' +
          'only answer in less than 10 words, if not possible then decline the question.',
      },
      {
        role: 'user',
        content: msg,
      },
    ],
  });
  return completion.choices[0].message.content;
}
