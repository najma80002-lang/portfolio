const fs = require('fs');
const path = require('path');

const directory = './src';

function fixJSXFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            fixJSXFiles(filePath);
        } else if (file.endsWith('.jsx')) {
            let content = fs.readFileSync(filePath, 'utf8');

            // Replace unicode escapes with actual JSX
            content = content.replace(/\\u003c/g, '<');
            content = content.replace(/\\u003e/g, '>');
            content = content.replace(/=\\u003e/g, '=>');

            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed: ${filePath}`);
        }
    });
}

fixJSXFiles(directory);
console.log('All JSX files fixed!');
