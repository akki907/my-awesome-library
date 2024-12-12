#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// Define version increment types
type VersionType = 'patch' | 'minor' | 'major';

function getCurrentVersion(): string {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    return packageJson.version;
}

function incrementVersion(currentVersion: string, type: VersionType): string {
    const [major, minor, patch] = currentVersion.split('.').map(Number);

    switch (type) {
        case 'major':
            return `${major + 1}.0.0`;
        case 'minor':
            return `${major}.${minor + 1}.0`;
        case 'patch':
        default:
            return `${major}.${minor}.${patch + 1}`;
    }
}

function updatePackageVersion(newVersion: string) {
    const packagePath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    packageJson.version = newVersion;

    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

function publishPackage() {
    try {
        // Build the project
        execSync('npm run build', { stdio: 'inherit' });

        // Publish to npm
        execSync('npm publish --access public', { stdio: 'inherit' });

        console.log('Package published successfully!');
    } catch (error) {
        console.error('Error publishing package:', error);
        process.exit(1);
    }
}

function main() {
    // Determine version increment type
    const versionType: VersionType = (process.argv[2] as VersionType) || 'patch';

    // Get current version
    const currentVersion = getCurrentVersion();

    // Calculate new version
    const newVersion = incrementVersion(currentVersion, versionType);

    // Update package.json
    updatePackageVersion(newVersion);

    // Create git commit and tag (optional)
    try {
        execSync(`git add package.json`, { stdio: 'inherit' });
        execSync(`git commit -m "Bump version to ${newVersion}"`, { stdio: 'inherit' });
        execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
    } catch (error) {
        console.warn('Git operations failed. Continuing...');
    }

    // Publish the package
    publishPackage();
}

// Run the script
main();