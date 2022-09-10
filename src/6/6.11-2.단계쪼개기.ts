import fs from 'fs';

// process dependency를 제거
// 사용자에게 유효성 검사
// 비지니스로직 처리

interface Order {
  id: number;
  name: string;
  status: 'ready' | 'not-ready';
}

function main(args: string[]) {
  const command = parseCommand(args);
  const data = getDataFromFile<Order[]>(command.fileName);
  return getCount(data, command.option);
}

function parseCommand(args: string[]) {
  const fileName = getFileName(args);
  const option = getOption(args);
  return {
    fileName,
    option,
  };
}

function getFileName(args: string[]): string {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  return `./${args[2]}.json`;
}

function getOption(args: string[]): 'ready' | 'not-ready' | 'all' {
  if (args.includes('-r')) {
    return 'ready';
  } else if (args.includes('-nr')) {
    return 'not-ready';
  }
  return 'all';
}

function getDataFromFile<T>(fileName: string): T {
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }
  const rawData = fs.readFileSync(fileName);
  return JSON.parse(rawData.toString());
}

function getCount(data: Order[], option: 'ready' | 'not-ready' | 'all') {
  if (option === 'all') {
    return data.length;
  }
  return data.filter((each) => each.status === option).length;
}

console.log(main(process.argv));
