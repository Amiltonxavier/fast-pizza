export const CheckboxComponent = () => {
    return (
        <div className="flex items-center">
            <input
                id="c1-13"
                type="checkbox"
                className="h-5 w-5 appearance-none bg-white border border-gray-300 rounded-md checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-300 transition-all cursor-pointer
          disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200 disabled:checked:bg-gray-200 relative"
            />
            <label htmlFor="c1-13" className="ml-2 cursor-pointer">
                Checkbox
            </label>
        </div>
    );
};