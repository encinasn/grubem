import { useState } from 'react';
import { useForm } from 'react-hook-form';
// components
import Textarea from '@shared/posts/TextareaPosts';
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

const ComposeDog = ({ closeModal }) => {
  const { imgUrl, upload, deleteImg } = useUploadFile();

  const { createDog, loading, error } = useDogs();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await createDog(data);
    if (!error.create) closeModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nombre"
          name="name"
          placeholder="Von der Grubem Land"
          disabled={loading.create}
          errorMessage={errors.name}
          ref={register('name', {
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
          label="Genero"
          name="gender"
          placeholder="Hembra"
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
          label="Es cachorro"
          name="isPuppy"
          disabled={loading.create}
          ref={register('isPuppy')}
        />

        <Separator />

        <Input
          label="Selección"
          name="selection"
          placeholder="Von der Grubem Land"
          disabled={loading.create}
          errorMessage={errors.selection}
          ref={register('selection', {
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
            pattern: {
              value: newExpression.name,
              message: newMessage.name,
            },
          })}
        />

        <Separator />

        <Checkbox
          label="Placa de codo"
          name="elbowPlate"
          disabled={loading.create}
          ref={register('elbowPlate')}
        />
        <Checkbox
          label="Placa de cadera"
          name="hipPlate"
          disabled={loading.create}
          ref={register('hipPlate')}
        />

        <Input
          label="Url de PedigreeDB"
          name="pedigreeUrl"
          placeholder="http://www.pedigreedatabase.com/"
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
