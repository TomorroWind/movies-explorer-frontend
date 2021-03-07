const genericError = (statusCode) => (message) => {
  const error = new Error(message);
  error.statusCode = statusCode;

  return error;
};

export const notFoundError = genericError(404);
export const badRequestError = genericError(400);
export const unauthorizedError = genericError(401);
export const forbiddenError = genericError(403);
export const conflictError = genericError(409);
export const internalServerlError = genericError(500);

export function wrapApiError(response) {
  let error = null;

  switch (response.status) {
    case 400:
      error = badRequestError('Данные введены неверно');
      break;

    case 401:
      error = unauthorizedError('Логин или пароль введены неверны');
      break;

    case 403:
      error = forbiddenError('Действие запрещено');
      break;

    case 404:
      error = notFoundError('Не найдено');
      break;

    case 409:
      error = conflictError('Такой пользователь уже существует');
      break;

    default:
      error = internalServerlError('Что-то пошло не так...');
      break;
  }

  return error;
}

