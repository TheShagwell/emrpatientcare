"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomField from "../CustomField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({
    username,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setisLoading(true);
    try {
      // const userData = { username, email, phone };
      // const user = await createUser(userData);
      // if(user) router.push(`/patients/${user.id}/register`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-4 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with appointments.</p>
        </section>

        <CustomField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="john.doe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone"
          placeholder="Phone number"
          iconSrc="/assets/icons/phone.svg"
          iconAlt="phone"
        />

        <CustomField
          fieldType={FormFieldType.DATE_PICKER}
          control={form.control}
          name="birthDate"
          label="Date of Birth"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
