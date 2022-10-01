import { Disclosure } from '@headlessui/react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/outline'
import { Heading, Text } from '~/components';

export function Accordion({ title, content, id }) {
  return (
    <Disclosure as="div" id={`acc-${id}`} className='mb-3 border-t'>
      {({open}) => (
        <>
          <Disclosure.Button className="flex justify-between py-4 w-full">
            <Heading className="" size="lead" as="h3">
              {title}
            </Heading>
            <div className='w-5'>
              { open ? 
                <MinusCircleIcon className='text-sm text-[#b9ac98]'/> : 
                <PlusCircleIcon className='text-sm text-[#b9ac98]'/>
              }
            </div>
          </Disclosure.Button>

          <Disclosure.Panel className='text-gray-500 mb-8'>
            <Text as="p" className='text-lg'>
              {content}
            </Text>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
