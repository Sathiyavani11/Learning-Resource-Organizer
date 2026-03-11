export const categories = ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX', 'Node.js', 'Other'];

export const starterResources = [
  {
    id: '1',
    title: 'MDN HTML Guide',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    category: 'HTML',
    level: 'Basic'
  },
  {
    id: '2',
    title: 'CSS Tricks Complete Guide to Flexbox',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    category: 'CSS',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'JavaScript.info',
    url: 'https://javascript.info/',
    category: 'JavaScript',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: 'React Official Docs',
    url: 'https://react.dev/',
    category: 'React',
    level: 'Basic'
  },
  {
    id: '5',
    title: 'Refactoring UI Book',
    url: 'https://www.refactoringui.com/',
    category: 'UI/UX',
    level: 'Advanced'
  },
  {
    id: '6',
    title: 'Node.js Docs',
    url: 'https://nodejs.org/en/docs',
    category: 'Node.js',
    level: 'Intermediate'
  }
];

export const readJson = (key, fallback) => {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || 'null');
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
};

export const readSessionJson = (key, fallback) => {
  try {
    const parsed = JSON.parse(sessionStorage.getItem(key) || 'null');
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
};

export const getCurrentUser = () => {
  const user = readJson('lro_current_user', null);
  if (user) {
    return user;
  }
  return readSessionJson('lro_current_user', null);
};

export const getUserResources = (email) => {
  if (!email) {
    return [];
  }

  const storageKey = `lro_resources_${email}`;
  const savedResources = readJson(storageKey, null);

  if (Array.isArray(savedResources)) {
    return savedResources;
  }

  localStorage.setItem(storageKey, JSON.stringify(starterResources));
  return starterResources;
};

export const saveUserResources = (email, resources) => {
  if (!email) {
    return;
  }

  const storageKey = `lro_resources_${email}`;
  localStorage.setItem(storageKey, JSON.stringify(resources));
};
