export const SolidLocationBuildingIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Solid Pin with Hollow Circle */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 2C6.36 2 3 5.36 3 9.5c0 4.8 6.4 10.74 6.95 11.23a.8.8 0 001.1 0c.55-.49 6.95-6.43 6.95-11.23C18 5.36 14.64 2 10.5 2zm0 4.5a3 3 0 100 6 3 3 0 000-6z"
    />
    {/* Solid Building/House Badge with Cutouts */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 11.5l-5 4v6.5a1 1 0 001 1h8a1 1 0 001-1v-6.5l-5-4zm-1.8 4.7h1.6v1.4h-1.6v-1.4zm0 2.6h1.6v1.4h-1.6v-1.4zm-2.2-2.6h1.4v1.4H15v-1.4zm0 2.6h1.4v1.4H15v-1.4z"
    />
  </svg>
);

export const SolidPhoneIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.57 3.9c0-.5-.4-.9-.9-.9H4.16c-.5 0-.9.4-.9.9 0 9.27 7.54 16.81 16.81 16.81.5 0 .9-.4.9-.9v-3.51c0-.5-.4-.9-.9-.9z" />
  </svg>
);

export const SolidMailIcon = ({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);