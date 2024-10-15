import D20Icon from '@/components/icons/d20-icon'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useSheet } from '@/hooks/useSheet'
import { useState } from 'react'

export default function CreateSheet() {
  const { sheet, opdateFiel, changeCharacteristic, changeCompetency } = useSheet()
  const [selectedRace, setSelectedRace] = useState<string>('')
  const [selectedClass, setSelectedClass] = useState<string>('')

  const showSheet = () => {
    console.log(sheet)
  }

  return (
    <section className='bg-card rounded'>
      <button onClick={showSheet}>Show Sheet</button>
      <header className='flex gap-2 items-center p-2'>
        <D20Icon height='20px' width='20px' fill='fill-primary' />
        <h2>New Character</h2>
      </header>
      <Separator />
      <main className='flex flex-col gap-2 p-2'>
        <section className='flex gap-2 items-center'>
          <div className='rounded shadow w-full bg-secondary p-2 flex flex-col justify-start items-start'>
            <Label className='font-bold text-base'>Name:</Label>
            <Input
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className='w-full bg-card rounded border-lightBorder'
              placeholder='John Doe'
              defaultValue={sheet.name}
              onChange={(e) => opdateFiel({ field: 'name', value: e.target.value })}
            />
          </div>
          <div className='rounded shadow w-full bg-secondary p-2 flex flex-col justify-start items-start'>
            <Label className='font-bold text-base'>Description:</Label>
            <Input
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className='w-full bg-card rounded border-lightBorder'
              placeholder='Bard School of Swords'
              defaultValue={sheet.description}
              onChange={(e) => opdateFiel({ field: 'description', value: e.target.value })}
            />
          </div>
        </section>
        <Separator />
        <section className='flex gap-2 items-center'>
          {sheet.characteristicPoints.map((characteristic) => (
            <article key={characteristic.name} className='flex flex-col shadow justify-center items-center rounded bg-secondary w-full p-2'>
              <Label htmlFor={characteristic.name} className='font-bold text-base'>{characteristic.upperShortName}</Label>
              <Input
                name={characteristic.name}
                id={characteristic.name}
                onClick={(e) => (e.target as HTMLInputElement).select()}
                type='number'
                className='bg-card rounded border-lightBorder w-[50px] text-center'
                defaultValue={characteristic.points}
                onChange={(e) => changeCharacteristic({ characteristic: characteristic.name, value: parseInt(e.target.value) })}
              />
            </article>
          ))}
        </section>
        <section className='flex gap-2 items-center'>
          {sheet.characteristicPoints.map((savingThrow) => (
            <article key={savingThrow.name} className='flex flex-col shadow justify-center items-center rounded bg-secondary w-full p-2'>
              <span className='flex items-center gap-1'>
                <Checkbox
                  defaultChecked={savingThrow.isCompetent}
                  onCheckedChange={(e) => changeCompetency({ characteristic: savingThrow.name, value: Boolean(e) })}
                />
                <h3 className='flex gap-1 items-center'>
                  {savingThrow.shortName}
                  {savingThrow.savingsThoroughs >= 0 ? (
                    <strong className='text-green-600'>+{savingThrow.savingsThoroughs}</strong>
                  ) : (
                    <strong className='text-red-600'>{savingThrow.savingsThoroughs}</strong>
                  )}
                </h3>
              </span>
            </article>
          ))}
        </section>
        <Separator />
        <section className='flex flex-col gap-2 items-start'>
          <div className='flex gap-2 w-full'>
            <article className='w-full h-full flex-col flex'>
              <div className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
                <Label htmlFor='class' className='font-bold text-lg'>Class:</Label>
                <Select onValueChange={(value) => setSelectedClass(value)} defaultValue={selectedClass}>
                  <SelectTrigger name='class' id='class' className='w-full bg-card rounded border-lightBorder'>
                    <SelectValue placeholder='Select class' />
                  </SelectTrigger>
                  <SelectContent className='border-lightBorder'>
                    <SelectItem value='customClass'>Custom class</SelectItem>
                  </SelectContent>
                </Select>
                {/* <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span> */}
              </div>
            </article>

            <article className='w-full h-full flex-col flex'>
              <div className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
                <Label htmlFor='race' className='font-bold text-lg'>Race:</Label>
                <Select onValueChange={(value) => setSelectedRace(value)} defaultValue={selectedRace}>
                  <SelectTrigger name='race' id='race' className='w-full bg-card rounded border-lightBorder'>
                    <SelectValue placeholder='Select race' />
                  </SelectTrigger>
                  <SelectContent className='border-lightBorder'>
                    <SelectItem value='customRace'>Custom race</SelectItem>
                  </SelectContent>
                </Select>
                {/* <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span> */}
              </div>
            </article>
          </div>
          <div className='flex gap-2 w-full'>
            {selectedClass === 'customClass' && (
              <article className='w-full h-full flex-col flex'>
                <div className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
                  <Label htmlFor='customClass' className='font-bold text-lg'>Name of class :</Label>
                  <Input
                    name='customClass'
                    id='customClass'
                    className='w-full bg-card rounded border-lightBorder'
                    defaultValue={sheet.race}
                    onChange={(e) => opdateFiel({ field: 'race', value: e.target.value })}
                  />
                  {/* <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span> */}
                </div>
              </article>
            )}

            {selectedRace === 'customRace' && (
              <article className='w-full h-full flex-col flex'>
                <div className='flex flex-col bg-secondary p-2 rounded shadow w-full'>
                  <Label htmlFor='customRace' className='font-bold text-lg'>Name of race :</Label>
                  <Input
                    name='customRace'
                    id='customRace'
                    className='w-full bg-card rounded border-lightBorder'
                    defaultValue={sheet.race}
                    onChange={(e) => opdateFiel({ field: 'race', value: e.target.value })}
                  />
                  {/* <span className='mt-1 text-sm text-red-700'>* {t('createSheet.required')}</span> */}
                </div>
              </article>
            )}
          </div>
        </section>
        <Separator />
        <section></section>
      </main>
    </section>
  )
}
