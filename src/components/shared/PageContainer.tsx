import React, { HTMLAttributes } from "react";

interface IPageContainerProps {
  title: string;
  subtitle?: string;
}

export const PageContainer = ({
  title,
  subtitle,
  children
}: IPageContainerProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="py-8">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h2>
          {subtitle && <h6>{subtitle}</h6>}
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 py-8 sm:px-0">{children}</div>
        </div>
      </main>
    </div>
  );
};
