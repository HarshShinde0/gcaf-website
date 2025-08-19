# GCAF Website - Google Cloud Arcade Facilitator Program

**Repository**: `gcaf-website`  
**Tech Stack**: React.js, Tailwind CSS, Daisy UI  
**Deployment**: Vercel (Auto-deployment from GitHub)

## Overview

The GCAF Website is the official online platform for the Google Cloud Arcade Facilitator Program. This comprehensive website provides information about the program, upcoming events, leaderboards, and resources for participants and facilitators.

## Features

- **Program Information**: Comprehensive details about the Google Cloud Arcade Facilitator Program
- **Events Management**: Display of upcoming, ongoing, and past events
- **Leaderboard System**: Track participant progress and achievements
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Analytics Integration**: Built-in Vercel Analytics for performance monitoring

## Tech Stack

- **Frontend Framework**: React.js 18.2.0
- **Styling**: Tailwind CSS with Daisy UI components
- **Routing**: React Router DOM
- **Icons**: React Icons (Font Awesome)
- **Analytics**: Vercel Analytics
- **Build Tool**: Create React App
- **Deployment**: Vercel

## Prerequisites

- Node.js 18.x or higher
- npm 8.x or higher
- Git

## Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/gcaf-website.git
cd gcaf-website

# Install dependencies
npm install

# Start development server
npm start
```

## Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (not recommended)
npm run eject
```

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── HomePage/       # Homepage-specific components
│   ├── Leaderboard/    # Leaderboard components
│   └── Background/     # Background components
├── Pages/              # Main page components
├── constants/          # Application constants and data
├── Images/             # Static image assets
└── App.js             # Main application component
```

## Configuration

### Environment Variables

No environment variables are required for basic functionality. The application is configured to work out of the box.

### Build Configuration

- **Framework**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node Version**: 18.x or higher (recommended)

## Deployment

### Vercel Deployment

This project is configured for automatic deployment on Vercel:

1. **Connect Repository**: Push your code to GitHub and connect to Vercel
2. **Auto-detection**: Vercel will automatically detect it's a Create React App project
3. **Build Process**: Uses the configured build settings in `vercel.json`
4. **Analytics**: Vercel Analytics is automatically included

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the build folder to your hosting provider
```

## Contributing

We welcome contributions to improve the GCAF Website. Please follow these guidelines:

### How to Contribute

1. **Fork the Repository**: Create your own fork of the project
2. **Create a Feature Branch**: Use descriptive branch names (e.g., `feature/event-management`)
3. **Make Changes**: Implement your improvements or bug fixes
4. **Test Your Changes**: Ensure the application works correctly
5. **Submit a Pull Request**: Provide a clear description of your changes

### Contribution Guidelines

- **Code Style**: Follow existing code formatting and naming conventions
- **Commit Messages**: Use clear, descriptive commit messages
- **Testing**: Test your changes thoroughly before submitting
- **Documentation**: Update documentation if you add new features
- **Issues**: Check existing issues before creating new ones

### Development Standards

- **React Best Practices**: Follow React.js best practices and hooks guidelines
- **Component Structure**: Keep components focused and reusable
- **Performance**: Optimize for performance and accessibility
- **Responsive Design**: Ensure mobile-first responsive design
- **Accessibility**: Maintain WCAG compliance standards

### Pull Request Process

1. **Description**: Provide a clear description of your changes
2. **Testing**: Include information about how you tested your changes
3. **Screenshots**: Add screenshots for UI changes if applicable
4. **Review**: Address any feedback from code reviews

## Support

For questions or support regarding the GCAF Website:

- **Issues**: Create an issue on GitHub for bugs or feature requests
- **Documentation**: Check this README and code comments
- **Community**: Reach out to the GCAF community

## Acknowledgments

- Google Cloud Platform for the Arcade Facilitator Program
- React.js community for the excellent framework
- Tailwind CSS team for the utility-first CSS framework
- Vercel for the deployment platform and analytics

---

**Last Updated**: Aug 2025 
**Version**: 1.0.0
