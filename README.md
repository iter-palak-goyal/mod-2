# Vulnerable Snyk Test Project

This is a simple single-file Node.js application designed to demonstrate dependency scanning tools (like Snyk). It includes packages with known security vulnerabilities.

## File Structure

- [package.json](file:///Users/palak2/Desktop/DevSecOps/SnykTest/package.json): Lists the target dependencies with pinned vulnerable versions.
- [index.js](file:///Users/palak2/Desktop/DevSecOps/SnykTest/index.js): Entry point of the application showcasing standard imports and simple usage of the packages.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm start
   ```

## Vulnerable Packages Included

- **express@4.16.0**: Contains security vulnerabilities including Open Redirect and Regular Expression Denial of Service (ReDoS).
- **lodash@4.17.15**: Contains Prototype Pollution vulnerabilities (CVE-2020-8203, CVE-2020-8203).
- **minimist@1.2.0**: Contains Prototype Pollution vulnerabilities (CVE-2020-7598, CVE-2021-44906).
- **axios@0.19.0**: Contains SSRF (Server-Side Request Forgery) vulnerabilities (CVE-2020-28168).
