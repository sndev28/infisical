// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretBlindIndexesSchema = z.object({
  id: z.string().uuid(),
  encryptedSaltCipherText: z.string(),
  saltIV: z.string(),
  saltTag: z.string(),
  algorithm: z.string().default("aes-256-gcm"),
  keyEncoding: z.string().default("utf8"),
  projectId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TSecretBlindIndexes = z.infer<typeof SecretBlindIndexesSchema>;
export type TSecretBlindIndexesInsert = Omit<TSecretBlindIndexes, TImmutableDBKeys>;
export type TSecretBlindIndexesUpdate = Partial<Omit<TSecretBlindIndexes, TImmutableDBKeys>>;