// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ConvertCurrency {
  static CurrencytoKwanza(currency: number) {
    if (currency === 0) return "Esgotado";
    return currency.toLocaleString("pt-AO", {
      style: "currency",
      currency: "AOA",
    });
  }
}
