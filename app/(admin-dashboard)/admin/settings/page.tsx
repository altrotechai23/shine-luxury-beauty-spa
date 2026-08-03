import { prisma } from "@/lib/prisma";

import PageHeader from "@/components/ui/page-header";
import Card from "@/components/ui/card";
import StatCard from "@/components/ui/stat-card";

import SettingsForm from "@/components/admin/settings-form";

import {
  Building2,
  Phone,
} from "lucide-react";

export default async function SettingsPage() {
  const settings = await prisma.setting.findFirst();

  return (
    <div className="space-y-8">

      <PageHeader
        title="Business Settings"
        description="Manage your salon information, contact details, hero content and social media."
      />

      <div className="grid gap-6 md:grid-cols-2">

        <StatCard
          title="Business"
          value={
            settings?.businessName || "Not configured"
          }
          icon={<Building2 size={26} />}
        />

        <StatCard
          title="Phone"
          value={
            settings?.phone || "Not configured"
          }
          icon={<Phone size={26} />}
        />

      </div>

      <Card className="rounded-3xl p-8">

        <SettingsForm
          settings={settings}
        />

      </Card>

    </div>
  );
}