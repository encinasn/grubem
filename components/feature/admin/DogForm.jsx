import { useForm } from 'react-hook-form';
// components
import Input from '@shared/inputs/Input';
import Checkbox from '@shared/inputs/Checkbox';
import Button from '@shared/Button';
import Separator from '@shared/Separator';
// utils
import { newMessage, newExpression } from 'utils/regExr';
import { BREAKPOINTS } from 'utils/breakpoints';
// hooks
import useDogs from 'hooks/useDogs';
import useUploadFile from 'hooks/useUploadFile';
import RadioButtons from '@shared/RadioButton';
import DropImage from '@shared/DropImage';

const genderOptions = [
  { id: 1, name: 'Macho', value: 'male' },
  { id: 2, name: 'Hembra', value: 'female' },
];

const selectionOptions = [
  { id: 1, name: 'Seleccion I', value: 'Seleccion I' },
  { id: 2, name: 'Seleccion I  - IGP1', value: 'Seleccion I  - IGP1' },
  { id: 2, name: 'Seleccion II', value: 'Seleccion II ' },
];

const ComposeDog = ({ closeModal }) => {
  const { filesUrl, loading: imgLoading, upload, deleteFile } = useUploadFile();
  const { createDog, loading, error } = useDogs();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      last_name: 'Von der Grubem Land',
    },
  });

  const onSubmit = async (data) => {
    await createDog({ ...data, picture: filesUrl });
    if (!error.create) closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          name="first_name"
          placeholder="Nombre"
          disabled={loading.create}
          errorMessage={errors.first_name}
          ref={register('first_name', {
            required: {
              value: true,
              message: newMessage.required,
            },
            pattern: {
              value: newExpression.name,
              message: newMessage.name,
            },
          })}
        />

        <Input
          label="Apellido"
          name="last_name"
          placeholder="Von der Grubem Land"
          disabled={loading.create}
          errorMessage={errors.last_name}
          ref={register('last_name', {
            required: {
              value: true,
              message: newMessage.required,
            },
            pattern: {
              value: newExpression.name,
              message: newMessage.name,
            },
          })}
        />

        <RadioButtons
          label="Genero"
          name="gender"
          options={genderOptions}
          disabled={loading.create}
          errorMessage={errors.gender}
          ref={register('gender', {
            required: {
              value: true,
              message: newMessage.required,
            },
          })}
        />

        <Input
          label="Fecha de nacimiento"
          name="dateOfBirth"
          type="date"
          placeholder="00/00/00"
          disabled={loading.create}
          errorMessage={errors.dateOfBirth}
          ref={register('dateOfBirth', {
            required: {
              value: true,
              message: newMessage.required,
            },
          })}
        />

        <Checkbox
          label="Esta disponible"
          name="available"
          disabled={loading.create}
          ref={register('available')}
        />

        <DropImage
          label="Imagenes"
          name="picture"
          files={filesUrl}
          onChange={upload}
          deleteFile={deleteFile}
          loading={imgLoading}
        />

        <Separator />

        <RadioButtons
          label="Selección"
          name="selection"
          options={selectionOptions}
          disabled={loading.create}
          errorMessage={errors.selection}
          ref={register('selection', {
            required: {
              value: true,
              message: newMessage.required,
            },
          })}
        />       

        {/* <DropdownSearch
          label="Categoria"
          name="product_category"
          prompt="Seleccionar categoria"
          disabled={isLoading}
          options={listCategories}
          id="id"
          atribute="name"
          value={category}
          onChange={setCategory}
          setValue={setValue}
          errorMessage={errors.product_category}
          ref={register('product_category', {
            required: {
              value: true,
              message: newMessage.required,
            },
          })}
        /> */}

        <Input
          label="Madre"
          name="femaleParent"
          placeholder="Madre"
          disabled={loading.create}
          errorMessage={errors.femaleParent}
          ref={register('femaleParent', {
            required: {
              value: true,
              message: newMessage.required,
            },
            pattern: {
              value: newExpression.name,
              message: newMessage.name,
            },
          })}
        />
        <Input
          label="Padre"
          name="maleParent"
          placeholder="Padre"
          disabled={loading.create}
          errorMessage={errors.maleParent}
          ref={register('maleParent', {
            required: {
              value: true,
              message: newMessage.required,
            },
            pattern: {
              value: newExpression.name,
              message: newMessage.name,
            },
          })}
        />

        <Separator />

        <Checkbox
          label="Placa de codo"
          name="elbow"
          disabled={loading.create}
          ref={register('elbow')}
        />
        <Checkbox
          label="Placa de cadera"
          name="hip"
          disabled={loading.create}
          ref={register('hip')}
        />

        <Input
          label="Url de PedigreeDB"
          type="url"
          name="pedigreeUrl"
          placeholder="pedigreedatabase.com/"
          disabled={loading.create}
          errorMessage={errors.pedigreeUrl}
          ref={register('pedigreeUrl')}
        />

        <Separator />

        <Button
          type="submit"
          variant="primary"
          margin="1.6rem 0 0 0"
          loading={loading.create}
        >
          Guardar
        </Button>
      </form>

      <style jsx>{`
        form {
          padding: 1.6rem;
        }

        span {
          font-size: 1.4rem;
          font-weight: 500;
        }

        .header {
          display: flex;
          align-items: center;
          padding: 0.8rem;
        }
        .header > span {
          margin-left: 1.2rem;
        }

        .add-to-post {
          display: grid;
          align-items: center;
          grid-template: auto / 1fr auto auto;
          padding: 0.4rem 1.2rem;
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--normal-radius);
        }

        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          .header > div {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default ComposeDog;
