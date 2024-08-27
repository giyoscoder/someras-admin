import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import CLabel from "../CLabel";
import { Controller } from "react-hook-form";

const defaultMaskOptions = {
  prefix: "€",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: " ",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  integerLimit: 100,
  allowNegative: true,  // Allow negative numbers
  allowLeadingZeroes: false,
};

const CPriceInput = ({
  control,
  name = "",
  label = "",
  required = false,
  maskOptions,
  value,
  error,
  onChange = () => {},
  ...inputProps
}: {
  control?: any;
  name?: string;
  label?: string;
  required?: boolean;
  error?: any;
  maskOptions?: any;
  inputProps?: any;
  value?: any;
  placeholder?: any;
  onChange?: (val?: any) => void;
}) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return (
    <div className="CPriceInput relative">
      {label && <CLabel label={label} required={required} />}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange: formHandler, value } }) => (
          <MaskedInput
            mask={currencyMask}
            {...inputProps}
            value={value ?? ""}
            onChange={(e: any) => {
              onChange(e.target.value);
              formHandler(e.target.value);
            }}
          />
        )}
      ></Controller>
      {error?.[name]?.message ? (
        <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
          {error[name].message}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

CPriceInput.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

export default CPriceInput;
