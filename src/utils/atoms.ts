'use client';
import { atom } from 'jotai';

import metaConvo from '@/components/Chat/Chat.stories';
export const msgAtom = atom('');
export const convoAtom = atom(metaConvo!.args!.conversation!);
