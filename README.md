# role-permissions-react - Frontend

## O que a lib faz?

A Lib carrega os dados que vem do backend em um formato e mostra em tela para criar e editar.

## Para utilizar precisa?

- Precisar do retorno dos dados das permissões do backend que seja igual a isso:

```JSON
[
	{
		"name": "users",
		"permissions": {
			"POST": false,
			"GET": false,
			"UPDATE": false,
			"DELETE": false
		}
	},
	{
		"name": "opening-hours",
		"permissions": {
			"GET": false,
			"UPDATE": false
		}
	}
]
```

## Instalação

```bash
yarn add role-permissions-react
# or
npm i role-permissions-react --save
```

## Outra Library

- Caso deseja utilizar o retorno do JSON de acordo acima, segue a Lib backend Nodejs / NestJs
  Open [https://www.npmjs.com/package/role-permissions-bd](https://www.npmjs.com/package/role-permissions-bd)

## Utilização da Library

- Mostrando Permissões (Criar ou Editar)

### Forma rápida

```tsx
...
import { PermissionsProps, Checkbox } from 'role-permissions-react';

export const App = () => {
  const [check, setCheck] = useState<PermissionsProps[]>([])

  useEffect(() => {
    setCheck(roles);
  }, [roles]);

  const handleCheckbox = (event: PermissionsProps[]) => {
    setCheck(event);
  };

  return(
    <>
      {roles.map((item, index) => {
        return (
          <li key={item.id}>
            <strong>{item.name}</strong>

            <Checkbox
              handleChange={handleCheckbox}
              data={{ index, item, permissions: check }}
            />
          </li>
          );
      })}
    </>
  )
}
```

### Forma Manual

```tsx
...
import { PermissionsProps, handlePermissions, permissions } from 'role-permissions-react';

export const App = () => {
  const [check, setCheck] = useState<PermissionsProps[]>([])

  useEffect(() => {
    setCheck(roles);
  }, [roles]);

  const handleCheckbox = (event: ...) => {
    const alterCheck = handlePermissions({
      permissions: check,
      event,
    });
    setCheck(alterCheck);
  };

  return(
    <>
      {roles.map((item, index) => {
        const access = permissions({ index, item, permissions: check });
        return (
          <li key={item.id}>
                    <strong>{item.name}</strong>

            {access.map((value, i) => (
                <p key={String(i)}>
                  <input
                    type="checkbox"
                    name={value.name}
                    value={value.value}
                    defaultChecked={value.checked}
                    onChange={handleCheckbox}
                />{' '}
                 {value.value}
              </p>
            ))}
          </li>
          );
      })}
    </>
  )
}

```

- Não permitindo o usuário ter acesso a página caso não tenha permissão

### NextPermissions

```tsx
...
import { nextPermission } from 'role-permissions-react';

const App = () => {

  useEffect(() => {
    async function loadUsers() {
      const response = await ... //fetch users api
      const me = response.data

      const passed = nextPermissions({
        roles: me.roles,
        pathname: 'teste' // Validar uma rota específica por padrão puxa pela URL location. Ex: http..s.com/users = users
      })
      // {
      //   ...
      //   "roles": [
      //     {
      //       "id": 10,
      //       "name": "Teste",
      //       "slug": "teste",
      //       "permissions": [
      //         {
      //           "name": "users",
      //           "permissions": {
      //             "POST": false,
      //             "GET": true,
      //             "UPDATE": false,
      //             "DELETE": true
      //           }
      //         },
      //       ],
      //     }
      //   ]
      // }

      if (!passed) {
        // Algum erro ou retorno para página inicial
      }
    }
  }, [])

  return(...)
}

```

### Funcionalidades

#### Checkbox

- alter_methods => Altera o nome do retorno de GET para EDITAR ...
- index => O indíce do map de uma array
- item => Valor de uma array
- permissions => As roles do usuário das permissões

```tsx
import React from "react";

const App: React.FC = () => {
  return (
    <Checkbox
      handleChange={handleCheckbox}
      data={{
        index,
        item,
        permissions: check,
        alter_methods: {
          get: "EDITAR",
          post: "CRIAR",
          update: "ATUALIZAR",
          delete: "DELETAR",
        },
      }}
    />
  );
};
```
