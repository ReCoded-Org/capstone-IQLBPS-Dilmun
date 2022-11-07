import { Input, TextArea } from '../Forms';

export default function AddItemForm() {
  return (
    <>
      <div className='bg-background'>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-primary">
                Profile
              </h3>
              <p className="mt-1 text-sm text-secondary">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-primary px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6">
                    <div>
                      <p className="block text-sm font-medium text-background">
                        Item Image
                      </p>
                      <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-tertiary px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-tertiary"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-background">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-tertiary font-medium text-secondary px-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-backgound focus-within:ring-offset-2 hover:text-background"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-tertiary">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2 ">
                      <Input name="title" type="text" errors={false}>
                        Item Name
                      </Input>
                      <Input name="price" type="number" errors={false}>
                        Price
                      </Input>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-background"
                    >
                      Select Item Type
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-secondary bg-background text-secondary py-2 px-3 shadow-sm focus:border-tertiary focus:outline-none focus:ring-tertiary sm:text-sm"
                      >
                        <option>Crafted</option>
                        <option>New</option>
                        <option>Donated</option>
                      </select>
                    </label>
                  </div>
                  <div>
                    <TextArea name="description" errors={false}>
                      Description
                    </TextArea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-2">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0 bg-background">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-primary">
                Contact Information
              </h3>
              <p className="mt-1 text-sm text-secondary">
                Use a permanent contact information to receive emails.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-primary px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <Input name="email" type="text" errors={false}>
                        Email address
                      </Input>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <Input name="country" type="text" errors={false}>
                        County
                      </Input>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <Input name="city" type="text" errors={false}>
                        City
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
