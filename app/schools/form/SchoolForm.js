"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";


const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
  "Columbus",
  "Indianapolis",
];

const statesProvinces = [
  { label: "California", value: "CA" },
  { label: "Texas", value: "TX" },
  { label: "New York", value: "NY" },
];

const countries = [
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
];

const workshops = [
    { label: "Program A", value: "program-a" },
    { label: "Program B", value: "program-b" },
    { label: "Program C", value: "program-c" },
    { label: "Program D", value: "program-d" },
  ];
  
const schoolFormSchema = z.object({
  name: z.string({ required_error: "University/College name is required" }),
  address: z.object({
    address_line: z.string({ required_error: "Address line is required" }),
    city: z.enum(cities, { required_error: "Please select a city" }),
    state_province: z.enum(statesProvinces.map(s => s.value), { required_error: "Please select a state/province" }), 
    country: z.enum(countries.map(c => c.value), { required_error: "Please select a country" }),
    postal_code: z.string().optional(), // Optional postal code
  }),
  workshops: z.string()
});

const defaultValues = {
  name: "",
  address: {
    address_line: "",
    city: "", 
    state_province: "", 
    country: "",
    postal_code: "",
  },
  workshops: "", 
};

export default function SchoolForm() {
  const form = useForm({
    resolver: zodResolver(schoolFormSchema),
    defaultValues,
  });

  const [selectedCountry, setSelectedCountry] = useState(defaultValues?.address?.country || '');

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    form.setValue('address.country', value);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkshops = workshops.filter((workshop) =>
    workshop.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University/College Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter university/college name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-medium leading-6">Address</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <FormField
              control={form.control}
              name="address.address_line"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address Line</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter address line" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.state_province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State/Province</FormLabel>
                  <FormControl>
                  <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your state/province" />
                      </SelectTrigger>
                      <SelectContent>
                        {statesProvinces.map((stateProvince) => (
                          <SelectItem key={stateProvince.value} value={stateProvince.value}>
                            {stateProvince.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                  <Select 
                    onValueChange={handleCountryChange}
                    value={selectedCountry}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.postal_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter postal code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> {/* Close grid */}
        </div> {/* Close Address Section */}

        {/* Workshops Section  */}
        <div>
          <h3 className="text-lg font-medium leading-6">Workshop</h3>
          <FormField
            control={form.control}
            name="workshops"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      {/* Use Input as a trigger */}
                      <Input
                        placeholder="Select a workshop"
                        value={
                          // Display selected workshop label or placeholder
                          workshops.find((w) => w.value === field.value)?.label || ""
                        }
                        readOnly // Prevent direct typing
                        className="w-full text-left" // Style as needed
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search workshops..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <CommandList>
                          {filteredWorkshops.length > 0 ? (
                            <CommandGroup>
                              {filteredWorkshops.map((workshop) => (
                                <CommandItem
                                  key={workshop.value}
                                  onSelect={() => {
                                    field.onChange(workshop.value);
                                  }}
                                >
                                  {workshop.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          ) : (
                            <CommandEmpty>No workshops found.</CommandEmpty>
                          )}
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit">Submit School</Button>
      </form>
    </Form>
  );
}