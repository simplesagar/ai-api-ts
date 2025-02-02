/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Citation, Citation$ } from "./citation";
import { z } from "zod";

export type RecordsCited = {
    citations: Array<Citation>;
};

/** @internal */
export namespace RecordsCited$ {
    export type Inbound = {
        citations: Array<Citation$.Inbound>;
    };

    export const inboundSchema: z.ZodType<RecordsCited, z.ZodTypeDef, Inbound> = z
        .object({
            citations: z.array(Citation$.inboundSchema),
        })
        .transform((v) => {
            return {
                citations: v.citations,
            };
        });

    export type Outbound = {
        citations: Array<Citation$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordsCited> = z
        .object({
            citations: z.array(Citation$.outboundSchema),
        })
        .transform((v) => {
            return {
                citations: v.citations,
            };
        });
}
