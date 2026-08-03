"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import Button from "@/components/ui/button";
import { createCategory } from "@/actions/category";

export default function CreateCategoryDialog() {
    const [pending, startTransition] = useTransition();

    const [name, setName] = useState("");

    const [slug, setSlug] = useState("");

    const [description, setDescription] = useState("");

    function slugify(value: string) {
        return value
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
    }

    return (
        <Dialog>

            <DialogTrigger >

                <Button>

                    + New Category

                </Button>

            </DialogTrigger>

            <DialogContent>

                <DialogHeader>

                    <DialogTitle>

                        Create Category

                    </DialogTitle>

                </DialogHeader>

                <form
                    action={(formData) => {

                        startTransition(async () => {

                            await createCategory(formData);

                            toast.success("Category created ✨");

                        });

                    }}
                    className="space-y-4"
                >

                    <input
                        name="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setSlug(slugify(e.target.value));
                        }}
                        className="w-full rounded-xl border p-3"
                    />

                    <input
                        name="slug"
                        value={slug}
                        readOnly
                        className="w-full rounded-xl border bg-stone-100 p-3"
                    />

                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full rounded-xl border p-3"
                    />

                    <Button
                        loading={pending}
                        type="submit"
                    >
                        Create
                    </Button>

                </form>

            </DialogContent>

        </Dialog>
    );
}