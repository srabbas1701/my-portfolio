import { SelectHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, helperText, error, options, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        {helperText && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{helperText}</p>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full px-4 py-3 pr-10
              bg-white dark:bg-gray-800
              border rounded-lg
              text-gray-900 dark:text-gray-100
              appearance-none
              transition-all duration-200
              ${
                error
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
