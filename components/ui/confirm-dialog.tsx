"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "@/components/ui/button";

interface Props {
  id: string;
  title: string;
  description: string;

  action: (formData: FormData) => Promise<void>;
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
        <Button className="bg-red-600">
          Delete
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-8">

          <Dialog.Title className="text-xl font-bold">
            {title}
          </Dialog.Title>

          <Dialog.Description className="mt-3 text-neutral-500">
            {description}
          </Dialog.Description>

          <form action={action}>
            <input
              type="hidden"
              name="id"
              value={id}
            />

            <div className="mt-8 flex justify-end gap-3">

              <Dialog.Close asChild>
                <Button
                  type="button"
                  className="bg-neutral-200 text-black"
                >
                  Cancel
                </Button>
              </Dialog.Close>

              <Button
                type="submit"
                className="bg-red-600"
              >
                Delete
              </Button>

            </div>
          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}