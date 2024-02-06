/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ChatSessionInput, ChatSessionInput$ } from "./chatsessioninput";
import { z } from "zod";

export enum ChatMode {
    Auto = "auto",
    Turbo = "turbo",
}

export type CreateChatSessionWithChatResultInput = {
    integrationId: string;
    chatSession: ChatSessionInput;
    chatMode?: ChatMode | undefined;
    stream?: boolean | undefined;
};

/** @internal */
export const ChatMode$ = z.nativeEnum(ChatMode);

/** @internal */
export namespace CreateChatSessionWithChatResultInput$ {
    export type Inbound = {
        integration_id: string;
        chat_session: ChatSessionInput$.Inbound;
        chat_mode?: ChatMode | undefined;
        stream?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<
        CreateChatSessionWithChatResultInput,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            integration_id: z.string(),
            chat_session: ChatSessionInput$.inboundSchema,
            chat_mode: ChatMode$.default(ChatMode.Auto),
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                integrationId: v.integration_id,
                chatSession: v.chat_session,
                ...(v.chat_mode === undefined ? null : { chatMode: v.chat_mode }),
                ...(v.stream === undefined ? null : { stream: v.stream }),
            };
        });

    export type Outbound = {
        integration_id: string;
        chat_session: ChatSessionInput$.Outbound;
        chat_mode: ChatMode;
        stream: boolean;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateChatSessionWithChatResultInput
    > = z
        .object({
            integrationId: z.string(),
            chatSession: ChatSessionInput$.outboundSchema,
            chatMode: ChatMode$.default(ChatMode.Auto),
            stream: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                integration_id: v.integrationId,
                chat_session: v.chatSession,
                chat_mode: v.chatMode,
                stream: v.stream,
            };
        });
}
