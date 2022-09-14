import connection from "../connection";

const selectPrice = async (id: string): Promise<number> => {
   try {
      const price = await connection("labecommerce_products")
         .select("price")
         .where({ id })

      return price[0].price

   } catch (error: any) {
      throw new Error(`Ocorreu um erro com o retorno de dados. Verifique os dados enviados e tente novamente.`)
   }
}

export default selectPrice