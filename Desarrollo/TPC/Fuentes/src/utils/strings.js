export function removePrefix(text, prefix = 'Out:') {
    const lines = text.split('\n');
    
    const processedLines = lines.map(line => {
      if (line.startsWith(prefix)) {
        return line.slice(prefix.length).trim();
      }
      return line;
    });
  
    return processedLines.join('\n');
  }
  