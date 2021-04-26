export class AppError {
  // Transformar em uma classe usando a lógica de message e status,
  //  onde vamos preenhcer esses caras e quem chamou vai usa-los.
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
  