const ExampleUseCase = {
  execute: async (input: any): Promise<any> => {
    return {
      message: `Hello, ${input.name}!`,
    }
  },
}

export default ExampleUseCase
