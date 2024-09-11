"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const schools = [
  { label: "School A", value: "school-a" },
  { label: "School B", value: "school-b" },
  { label: "School C", value: "school-c" },
];

const programs = [
  { label: "Program A", value: "program-a" },
  { label: "Program B", value: "program-b" },
  { label: "Program C", value: "program-c" },
  { label: "Program D", value: "program-d" },
];



const proposalFormSchema = z.object({
  school: z.string({ required_error: "Please select your school" }),
  first_name: z.string({ required_error: "Please input your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }), // Updated email validation
  program: z.string({ required_error: "Please select your program" }),
  proposed_dates: z
    .array(z.date({ required_error: "Please select a date" }))
    .min(1, { message: "Please select at least one date" }),
  financial_aid: z.boolean(),
  type: z.enum(["in-person", "online"], { 
    required_error: "Please select a type",
    invalid_type_error: "Invalid type selected" // Optional custom error message
  }),

  payment_info: z.object({
    firstname: z.string({ 
      required_error: "Please enter your first name for payment" 
    }),
    lastname: z.string({ 
      required_error: "Please enter your last name for payment" 
    }),
    email: z.string().email({ 
      message: "Please enter a valid email address for payment" 
    }),
  }),
});

const defaultValues = {
  school: "school-a",
  first_name: "test",
  email: "test@email.com",
  program: "program-a",
  proposed_dates: [],
  financial_aid: false,
  payment_info: {
    firstname: "test",
    lastname: "test",
    email: "test@test.com",
  },
};

export default function WorkshopForm() {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(proposalFormSchema),
    defaultValues,
  });

  function onSubmit(values) {
    console.log("onsubmit")
    console.log(values); // Log submitted data to console
    toast({
      title: "Application Submitted!",
      description: "Thank you for your submission.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* School Dropdown  */}
        <FormField
          control={form.control}
          name="school"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>School</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                  
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? schools.find((school) => school.value === field.value)
                            ?.label
                        : "Select School"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search school..." />
                    <CommandList>
                      <CommandEmpty>No school found.</CommandEmpty>
                      <CommandGroup>
                        {schools.map((school) => (
                          <CommandItem
                            value={school.label}
                            key={school.value}
                            onSelect={() => {
                              form.setValue("school", school.value);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                school.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {school.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the school you are applying from.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Program Dropdown */}
        <FormField
          control={form.control}
          name="program"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Program</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? programs.find(
                            (program) => program.value === field.value
                          )?.label
                        : "Select Program"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search program..." />
                    <CommandList>
                      <CommandEmpty>No program found.</CommandEmpty>
                      <CommandGroup>
                        {programs.map((program) => (
                          <CommandItem
                            value={program.label}
                            key={program.value}
                            onSelect={() => {
                              form.setValue("program", program.value);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                program.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {program.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the program you are interested in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                    <FormItem className="space-y-3">
                    <FormLabel>Notify me about...</FormLabel>
                    <FormControl>
                        <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                        >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                            <RadioGroupItem value="in-person" />
                            </FormControl>
                            <FormLabel className="font-normal">
                            In-Person
                            </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                            <RadioGroupItem value="online" />
                            </FormControl>
                            <FormLabel className="font-normal">
                            Online
                            </FormLabel>
                        </FormItem>

                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
        {/* First Name Input */}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Your first name" {...field} />
              </FormControl>
              <FormDescription>Please enter your first name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ... (rest of the form fields) */}
        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} type="email" />
              </FormControl>
              <FormDescription>
                Please enter your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Proposed Dates */}
        <FormField
          control={form.control}
          name="proposed_dates"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Proposed Dates</FormLabel>
              <div className="space-y-2">
                {field.value.map((date, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                        type="button"
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {format(new Date(date), "PPP")}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value[index]}
                        onSelect={(date) => {
                          const updatedDates = [...field.value];
                          updatedDates[index] = date;
                          form.setValue("proposed_dates", updatedDates);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
                onClick={() => {
                  form.setValue("proposed_dates", [
                    ...field.value,
                    new Date(),
                  ]);
                }}
              >
                Add a date
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
              <FormDescription>
                Select the dates you are available for the program.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Financial Aid Checkbox */}
        <FormField
          control={form.control}
          name="financial_aid"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
              <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
              <FormLabel>
                Are you applying for financial aid?
                </FormLabel>
                <FormDescription>
                If you are applying for financial aid, please ensure that you provide all necessary documentation.
              
            </FormDescription>  

              </div>
              <FormMessage />
            </FormItem>
          )}
        />


        {/* Payment Information */}
        <div className="space-y-6">
          <h3 className="">Payment Information</h3>
          <div className="grid grid-cols-2 gap-4"> 
            <FormField
              control={form.control}
              name="payment_info.firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} /> 
                  </FormControl>
                  <FormMessage /> 
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="payment_info.lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> 

          <FormField 
            control={form.control}
            name="payment_info.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} type="email" /> 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit Application</Button>
      </form>
    </Form>
  );
}