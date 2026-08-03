"use client";

import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { AlertTriangle, X } from "lucide-react";

import Button from "@/components/ui/button";

interface Props {
  id: string;
  title: string;
  description: string;
  action: (formData: FormData) => Promise<{
    success?: boolean;
  } | void>;
}

export default function ConfirmDialog({
  id,
  title,
  description,
  action,
}: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="destructive"
          className="rounded-xl"
        >
          Delete
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>

        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
          />
        </Dialog.Overlay>

        <Dialog.Content asChild>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 28,
            }}
            className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-neutral-200 bg-white p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle
                    size={28}
                    className="text-red-600"
                  />
                </div>

                <div>

                  <Dialog.Title className="text-xl font-bold">
                    {title}
                  </Dialog.Title>

                  <Dialog.Description className="mt-2 text-sm text-neutral-500">
                    {description}
                  </Dialog.Description>

                </div>

              </div>

              <Dialog.Close asChild>
                <button className="rounded-full p-2 transition hover:bg-neutral-100">
                  <X size={18} />
                </button>
              </Dialog.Close>

            </div>

            <form action={async (formData) => {
              await action(formData);
            }}
            className="mt-8">

              <input
                type="hidden"
                name="id"
                value={id}
              />

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <Dialog.Close asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                </Dialog.Close>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Button
                    type="submit"
                    variant="destructive"
                    className="w-full sm:w-auto"
                  >
                    Yes, Delete
                  </Button>
                </motion.div>

              </div>

            </form>

          </motion.div>
        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  );
}