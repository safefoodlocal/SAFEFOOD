// API Configuration
// This file centralizes API endpoints for easy backend integration later
// TODO: When backend is ready, replace these placeholder URLs with actual API endpoints

export const API_CONFIG = {
  // Base URL for backend API - update when backend is deployed
  BASE_URL: import.meta.env.VITE_API_BASE_URL || '/api',
  
  // Contact form endpoint
  CONTACT: '/contact',
  
  // Newsletter signup endpoint
  NEWSLETTER: '/newsletter',
  
  // Products data endpoint (can be static JSON or dynamic API)
  PRODUCTS: '/products',
  
  // Product categories endpoint
  CATEGORIES: '/categories'
}

// Helper function for API calls
export async function apiCall(endpoint, options = {}) {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  
  const mergedOptions = { ...defaultOptions, ...options }
  
  try {
    const response = await fetch(url, mergedOptions)
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}
