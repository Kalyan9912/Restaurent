# ---------- BUILD STAGE ----------
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app
COPY BACKEND/pom.xml .
COPY /BACKEND/src ./src

RUN mvn clean package -DskipTests

# ---------- RUNTIME STAGE ----------
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app
COPY --from=build BACKEND/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
