'use client';

import * as React from 'react';
import { Check, ChevronsDown, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function Combobox({ options, value, onValueChange, images }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('USD');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          role='combobox'
          aria-expanded={open}
          className='w-[100px] font-bold'>
          <img
            src={images[selected]}
            alt={'usd'}
            className='w-6 h-6 mr-0 rounded-full object-cover'
          />
          {selected ? options.find((option) => option.value === selected)?.label : 'Select...'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[100px] p-0'>
        <Command>
          <CommandInput placeholder='' />
          <CommandList>
            <CommandEmpty>Not found</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className={`${option.value === selected ? 'bg-primaryLight' : ''}`}
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setSelected(currentValue === selected ? '' : currentValue);
                    setOpen(false);
                    onValueChange(currentValue);
                  }}>
                  <img
                    src={images[option.label]}
                    alt={'usd'}
                    className='w-6 h-6 mr-0 rounded-full object-cover'
                  />
                  {option.label}
                  {/* <Check
                    className={cn(
                      'ml-auto',
                      selected === option.value ? 'opacity-100' : 'opacity-0'
                    )}
                  /> */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
