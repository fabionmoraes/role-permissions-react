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

- Retorno de permissão para página

... criando conteúdo
