import type { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "world";

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}!` }),
  };
};

export const generateOTP = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "world";

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}! (generate)` }),
  };
};

export const verifyOTP = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "world";

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}! (verify)` }),
  };
};
