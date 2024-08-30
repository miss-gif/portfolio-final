// 입력 필드 컴포넌트
const InputField = ({ label, register, error, ...props }) => (
  <div className="mb-2 w-80">
    <label className="block text-gray-700">{label}</label>
    <input
      {...register}
      {...props}
      className="mt-1 p-2 border rounded w-full"
    />
    {error && <span className="text-red-500">{error.message}</span>}
  </div>
);

export default InputField;
