/* eslint-disable react/prop-types */

export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          id="error-page"
          className=" bg-red-100 dark:bg-slate-900 min-h-screen flex flex-col justify-center w-[100%] text-2xl items-center *:p-3"
        >
          <h1 className="font-bold text-6xl text-red-600">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      </div>
    </>
  );
}
