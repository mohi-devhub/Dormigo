'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@/components/magicui/Wrapper';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/lib/auth-context';
import {
  User,
  Mail,
  GraduationCap,
  ArrowLeft,
  Package,
  ShoppingBag,
  Trash2,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import { getMyProducts, deleteProduct, type ProductResponse } from '@/lib/api/products';
import { ApiError } from '@/lib/api/client';

const placeholderImage =
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop';

const ProfilePage = () => {
  const router = useRouter();
  const { user } = useAuth();

  const [listings, setListings] = useState<ProductResponse[]>([]);
  const [isLoadingListings, setIsLoadingListings] = useState(true);
  const [listingsError, setListingsError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  useEffect(() => {
    getMyProducts()
      .then(setListings)
      .catch(() => setListingsError('Could not load your listings.'))
      .finally(() => setIsLoadingListings(false));
  }, []);

  const handleDelete = async (id: number, title: string) => {
    setDeletingId(id);
    setDeleteError(null);
    setDeleteSuccess(null);
    try {
      await deleteProduct(id);
      setListings((prev) => prev.filter((p) => p.id !== id));
      setDeleteSuccess(`"${title}" has been removed.`);
    } catch (error) {
      if (error instanceof ApiError) {
        setDeleteError(error.message || 'Could not delete the listing.');
      } else {
        setDeleteError('Unable to connect to the server.');
      }
    } finally {
      setDeletingId(null);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Wrapper>
          <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <div className="mb-8">
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
            </div>

            {/* Profile Card */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
                  <Link
                    href="/sell"
                    className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-200 text-sm font-semibold"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    List Item
                  </Link>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {user.firstName} {user.lastName}
                      </h2>
                      <p className="text-gray-600">Dormigo User</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-600">Email Address</p>
                          <p className="text-gray-900">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    {user.university && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-600">University</p>
                            <p className="text-gray-900">{user.university}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-600">User ID</p>
                          <p className="text-gray-900 font-mono text-sm">{user.id}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-600">Status</p>
                          <p className="text-gray-900">Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 bg-white shadow rounded-lg">
              <div className="px-6 py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/orders"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                  >
                    <ShoppingBag className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">My Orders</span>
                  </Link>
                  <Link
                    href="/sell"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                  >
                    <Package className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Sell Item</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* My Listings */}
            <div className="mt-6 bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">My Listings</h3>
                  {listings.length > 0 && (
                    <span className="text-sm text-gray-500">{listings.length} item{listings.length !== 1 ? 's' : ''}</span>
                  )}
                </div>

                {deleteSuccess && (
                  <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs text-green-800 font-medium">{deleteSuccess}</span>
                  </div>
                )}
                {deleteError && (
                  <div className="mb-4 bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-xs text-red-800 font-medium">{deleteError}</span>
                  </div>
                )}

                {isLoadingListings && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">Loading your listings...</p>
                  </div>
                )}

                {listingsError && !isLoadingListings && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-xs text-red-800 font-medium">{listingsError}</span>
                  </div>
                )}

                {!isLoadingListings && !listingsError && listings.length === 0 && (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 border border-gray-200 rounded-2xl mx-auto mb-4">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">You haven&apos;t listed any items yet.</p>
                    <Link
                      href="/sell"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200"
                    >
                      List Your First Item
                    </Link>
                  </div>
                )}

                {!isLoadingListings && listings.length > 0 && (
                  <div className="space-y-3">
                    {listings.map((product) => {
                      const img =
                        product.primaryImage ??
                        product.productImages?.[0] ??
                        placeholderImage;
                      return (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200"
                        >
                          <Link href={`/product/${product.id}`} className="flex-shrink-0">
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-gray-200 bg-white">
                              <Image
                                src={img}
                                alt={product.title}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>
                          </Link>
                          <div className="flex-1 min-w-0">
                            <Link
                              href={`/product/${product.id}`}
                              className="text-sm font-semibold text-gray-900 hover:text-gray-700 line-clamp-1 block"
                            >
                              {product.title}
                            </Link>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-sm font-bold text-gray-900">
                                ₹{Number(product.price).toLocaleString()}
                              </span>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                  product.isAvailable
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : 'bg-gray-100 text-gray-500 border border-gray-200'
                                }`}
                              >
                                {product.isAvailable ? 'Available' : 'Sold'}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleDelete(product.id, product.title)}
                            disabled={deletingId === product.id}
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 transition-colors duration-200 disabled:opacity-50"
                            aria-label={`Remove ${product.title}`}
                          >
                            {deletingId === product.id ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b border-gray-600" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Account Settings */}
            <div className="mt-6 bg-white shadow rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Change Password</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Notification Preferences</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Privacy Settings</span>
                      <span className="text-gray-400">→</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </ProtectedRoute>
  );
};

export default ProfilePage;
