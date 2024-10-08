"use client";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GetInTouch = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section>
      <SectionTitle title={"Contact us"} subtitle={"Get In Touch"} />
      <div className="flex flex-col-reverse items-center  lg:flex-row gap-8">
        <div>
          <Image
            src="/assets/images/get-touch.jpg"
            alt="get in touch"
            width={500}
            height={500}
          />
        </div>
        {/* get in touch form  */}
        <div className="mt-6 border px-6 py-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex gap-3">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-primary-color"
                          placeholder="Student Name *"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className=" focus-visible:ring-primary-color"
                          placeholder="Phone Number *"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=" focus-visible:ring-primary-color"
                        placeholder="Email Address *"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=" focus-visible:ring-primary-color"
                        placeholder="Student Class *"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write Your Message "
                        // className=" ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
                        className=" focus-visible:ring-primary-color"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-primary-color px-8  text-white hover:bg-[#9E77ED]"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
