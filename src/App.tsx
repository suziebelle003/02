import { twJoin, twMerge } from "tailwind-merge";
const App = () => {
  const isError = false;
  return (
    <>
      <h1
        className={twJoin(
          "text-green-500 text-5xl",
          isError && "text-rose-500"
        )}>
        App Component
      </h1>
    </>
  )
}
export default App