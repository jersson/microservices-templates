FROM mcr.microsoft.com/dotnet/core/sdk:3.0 as build-env
WORKDIR /services/books

COPY *.csproj  ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /services/books
COPY --from=build-env /services/books/out .
ENTRYPOINT ["dotnet", "03-get-and-docker.dll"]

EXPOSE 80